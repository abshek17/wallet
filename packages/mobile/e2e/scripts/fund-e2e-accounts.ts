var utils = require('./utils.ts')
var consts = require('./consts.ts')

utils.dotenv.config({ path: '../.env' })

const valoraTestFaucetSecret = process.env.TEST_FAUCET_SECRET

;(async () => {
  // Get E2E Test Wallet Balance & Valora Faucet Balance
  const receivingBalance = await utils.getBalance()
  const sendingBalance = await utils.getBalance(consts.E2E_TEST_FAUCET)
  console.table(await utils.getBalance(consts.E2E_TEST_FAUCET))

  // Connect Valora E2E Test Faucet - Private Key Stored in GitHub Secrets
  utils.kit.connection.addAccount(
    utils.web3.eth.accounts.privateKeyToAccount(valoraTestFaucetSecret).privateKey
  )

  // Get Token Contract Wrappers
  const celoToken = await utils.kit.contracts.getGoldToken()
  const cusdToken = await utils.kit.contracts.getStableToken()
  const ceurToken = await utils.kit.contracts.getStableToken('cEUR')
  const celoExchange = await utils.kit.contracts.getExchange()
  const cusdExchange = await utils.kit.contracts.getExchange('cUSD')
  const ceurExchange = await utils.kit.contracts.getExchange('cEUR')

  // Balance Faucet
  let balances = await utils.getBalance(consts.E2E_TEST_FAUCET)
  let sum = 0
  const numOfTokens = Object.keys(balances).length
  for (let balance in balances) {
    console.log(balances[balance])
    sum += balances[balance]
  }

  for (let balance in balances) {
    const target = sum / numOfTokens
    if (balances[balance] >= sum / numOfTokens) {
      const toSell = balances[balance] - target
      console.log(toSell)
      const amountToExchange = utils.kit.web3.utils.toWei(`${toSell}`, 'ether')
      console.log(`${balance} balance higher than ${sum / numOfTokens}`)
      switch (balance) {
        case 'CELO':
          try {
            const celoApproveTx = await celoToken
              .approve(celoExchange.address, amountToExchange)
              .send({ from: consts.E2E_TEST_FAUCET })
            await celoApproveTx.waitReceipt()
            const celoSellAmount = await celoExchange.quoteGoldSell(amountToExchange)
            const celoSellTx = await celoExchange
              .sellGold(amountToExchange, celoSellAmount)
              .send({ from: consts.E2E_TEST_FAUCET })
            await celoSellTx.waitReceipt()
          } catch (err) {
            console.log('Failed to sell CELO', err)
          } finally {
            break
          }
        case 'cUSD':
          try {
            const cusdApproveTx = await cusdToken
              .approve(cusdExchange.address, amountToExchange)
              .send({ from: consts.E2E_TEST_FAUCET })
            await cusdApproveTx.waitReceipt()
            const cusdSellAmount = await cusdExchange.quoteStableSell(amountToExchange)
            const cusdSellTx = await cusdExchange
              .sellStable(amountToExchange, cusdSellAmount)
              .send({ from: consts.E2E_TEST_FAUCET })
            await cusdSellTx.waitReceipt()
          } catch (err) {
            console.log('Failed to sell cUSD', err)
          } finally {
            break
          }
        case 'cEUR':
          try {
            const ceurApproveTx = await ceurToken
              .approve(ceurExchange.address, amountToExchange)
              .send({ from: consts.E2E_TEST_FAUCET })
            await ceurApproveTx.waitReceipt()
            const ceurSellAmount = await ceurExchange.quoteStableSell(amountToExchange)
            const ceurSellTx = await ceurExchange
              .sellStable(amountToExchange, ceurSellAmount)
              .send({ from: consts.E2E_TEST_FAUCET })
            await ceurSellTx.waitReceipt()
          } catch (err) {
            console.log('Failed to sell cEUR', err)
          } finally {
            break
          }
      }
    } else {
      const toBuy = target - balances[balance]
      const amountToExchange = utils.kit.web3.utils.toWei(`${toBuy}`, 'ether')
      console.log(`${balance} balance lower than ${sum / numOfTokens}`)
      switch (balance) {
        case 'CELO':
          try {
            const celoApproveTx = await celoToken
              .approve(cusdExchange.address, amountToExchange)
              .send({ from: consts.E2E_TEST_FAUCET })
            await celoApproveTx.waitReceipt()
            const celoBuyAmount = await celoExchange.quoteGoldBuy(amountToExchange)
            const celoBuyTx = await celoExchange
              .buyGold(amountToExchange, celoBuyAmount)
              .send({ from: consts.E2E_TEST_FAUCET })
            await celoBuyTx.waitReceipt()
          } catch (err) {
            console.log('Failed to buy CELO', err)
          } finally {
            break
          }
        case 'cUSD':
          try {
            const cusdApproveTx = await celoToken
              .approve(cusdExchange.address, amountToExchange)
              .send({ from: consts.E2E_TEST_FAUCET })
            await cusdApproveTx.waitReceipt()
            const cusdBuyAmount = await cusdExchange.quoteStableBuy(amountToExchange)
            const cusdBuyTx = await cusdExchange
              .buyStable(amountToExchange, cusdBuyAmount)
              .send({ from: consts.E2E_TEST_FAUCET })
            await cusdBuyTx.waitReceipt()
          } catch (err) {
            console.log('Failed to buy cUSD', err)
          } finally {
            break
          }
        case 'cEUR':
          try {
            const ceurApproveTx = await celoToken
              .approve(ceurExchange.address, amountToExchange)
              .send({ from: consts.E2E_TEST_FAUCET })
            await ceurApproveTx.waitReceipt()
            const ceurBuyAmount = await ceurExchange.quoteStableBuy(amountToExchange)
            const ceurBuyTx = await ceurExchange
              .buyStable(amountToExchange, ceurBuyAmount)
              .send({ from: consts.E2E_TEST_FAUCET })
            await ceurBuyTx.waitReceipt()
          } catch (err) {
            console.log('Failed to buy cEUR', err)
          } finally {
            break
          }
      }
    }
  }

  // Set Amount To Send
  let amountToSend = utils.web3.utils.toWei('50', 'ether')

  // Loop through E2E Test Wallet Balance Object
  for (const coin in receivingBalance) {
    let tx
    // Add funds if balance is less than 100 add 50
    if (receivingBalance[coin] < 100 && sendingBalance[coin] > 50) {
      switch (coin) {
        case 'CELO':
          tx = await celoToken
            .transfer(consts.E2E_TEST_WALLET, amountToSend)
            .send({ from: consts.E2E_TEST_FAUCET })
          break
        case 'cUSD':
          tx = await cusdToken
            .transfer(consts.E2E_TEST_WALLET, amountToSend)
            .send({ from: consts.E2E_TEST_FAUCET })
          break
        case 'cEUR':
          tx = await ceurToken
            .transfer(consts.E2E_TEST_WALLET, amountToSend)
            .send({ from: consts.E2E_TEST_FAUCET })
          break
      }
      // Wait for the transactions to be processed
      let receipt = await tx.waitReceipt()

      // Print Receipt
      console.log(' Transaction receipt: %o', receipt)
    }
  }

  // Log Balances
  console.log('E2E Test Account:', consts.E2E_TEST_WALLET)
  console.table(await utils.getBalance())
  console.log('Valora Test Facuet:', consts.E2E_TEST_FAUCET)
  console.table(await utils.getBalance(consts.E2E_TEST_FAUCET))
  await utils.balanceError()
})()
