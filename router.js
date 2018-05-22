const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()

router.use(bodyParser.json())

router.get('/:GUID/sendmany', (req, res) => {
  if (!req.params.GUID) return res.json({error: 'no GUID sent'})
  const from = req.query.from
  const password = req.query.password
  const recipients = req.query.recipients
  const fee = req.query.fee_per_byte
  const api = req.query.api_code

  if (!from || !password || !recipients || !fee || !api) {
    return res.status(500).json({error: 'Missing query'})
  }

  const parsed = JSON.parse(recipients)

  if (!parsed) {
    return res.status(500).json({error: 'Unable to parse recipients'})
  }

  if (!Object.keys(parsed).length) return res.json({ ok: false, error: 'Empty payment object' })

  res.json({
    success: true, message: 'Sent to multiple', txid: 123456679
  })
})

module.exports = router
