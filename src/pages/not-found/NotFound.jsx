import React from 'react'
import { Result, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <section
      className='pt-[100px] mb-[40px]'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }}
    >
      <div style={{ maxWidth: 600 }}>
        <Result
          status="404"
          title={<span style={{ fontSize: '40px' }}>404</span>}
          subTitle={
            <span style={{ fontSize: '16px' }}>
              Kechirasiz, siz izlagan sahifa mavjud emas.
            </span>
          }
          extra={
            <Link to={'/'}>
              <Button
                type="primary"
                size="large"
                style={{ fontSize: '14px', padding: '5px 13px', borderRadius: '10px' }}
                onClick={() => navigate('/')}
              >
                Bosh sahifaga qaytish
              </Button>
            </Link>
          }
        />
      </div>
    </section>
  )
}

export default NotFound
