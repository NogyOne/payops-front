import React from 'react'
import Navbar from '@/components/Navbar'
import Row from '@/components/Row'
import { getSubscriptions } from '@/services/api'

const subscriptions = await getSubscriptions()

export default function Subscriptions() {
  return (
    <section className='bg-[#EFEFEF] w-full overflow-hidden'>
      
      <article className='p-10'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 rtl:text-right'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-300 '>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Status
                </th>
                <th scope='col' className='px-6 py-3'>
                  Initial Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  End Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  Days Left
                </th>
              </tr>
            </thead>
            <tbody>
              {subscriptions?.map((subscription, index) => (
                <Row
                  key={index}
                  name={subscription.customerUser.name}
                  status={subscription.status}
                  initialDate={subscription.startDate}
                  endDate={subscription.endDate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}
