import { InputFile, InputText } from 'elements/Form'

import Fade from 'react-reveal/Fade'
import React from 'react'
import logobca from 'assets/images/logo_bca.jpg'
import logomandiri from 'assets/images/logo_mandiri.jpg'

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props

  const tax = 10
  const subTotal = ItemDetails.price * checkout.duration
  const subtax = (subTotal * tax) / 100
  const grandTotal = subtax + subTotal
  const bca = 'Bank Central Asia'

  return (
    <Fade>
      <div className='container' style={{ marginBottom: 30 }}>
        <div className='row justify-content-center align-items-center'>
          <div className='col-5 border-right py-5' style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className='mb-4'>Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>

              <div className='row mt-4'>
                <div className='col-3 text-right'>
                  <img src={logobca} alt={bca} width='60' />
                </div>
                <div className='col'>
                  <dl>
                    <dd>{bca}</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>

              <div className='row'>
                <div className='col-3 text-right'>
                  <img src={logomandiri} alt='mandiri' width='60' />
                </div>
                <div className='col'>
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>

          <div className='col-5 py-5' style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor='proofPayment'>Upload Bukti Transfer</label>
              <InputFile
                accept='image/*'
                id='proofPayment'
                name='proofPayment'
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor='bankname'>Asal Bank</label>
              <InputText
                id='bankname'
                name='bankname'
                type='text'
                value={data.bankname}
                onChange={props.onChange}
              />

              <label htmlFor='bankHolder'>Nama Pengirim</label>
              <InputText
                id='bankHolder'
                name='bankHolder'
                type='text'
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  )
}
