import React from 'react'

const Recent = () => {
  return (
    <>
    <section class='recent mt-[20px] mb-[20px]'>
    <h3 class="ml-[] text-[30px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626]">Recent Transaction</h3>
    
<table class="width-100%">
  <thead>
    <tr>
      <th><input type="checkbox" class="appearance-none indeterminate:bg-gray-300 ..." /></th>
      <th>Date</th>
      <th>Description</th>
      <th>Amount</th>
      <th>To/From</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox" class="appearance-none indeterminate:bg-gray-300 ..." /></td>
      <td>20/10/22</td>
      <td>E-Money Transfer</td>
      <td>-250 USD</td>
      <td>@bayu_Ananda</td>
      <td><button>hhhhhh</button></td>
    </tr>
  </tbody>
</table>
    </section>
    </>
  )
}

export default Recent