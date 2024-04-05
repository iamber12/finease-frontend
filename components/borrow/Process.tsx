const Process = () => {
  return (
    <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2 mt-20 mb-15">
      <h2 className="text-2xl sm:text-3xl min-[1650px]:text-[44px] !leading-tight font-normal mb-4 lg:mb-6 mt-6 text-center" style={{marginBottom:"40px"}}>
        Quick and simple process
        </h2> 
      <ul className="list-disc">
        <li>
          <div>
            <h3 className="h3 mb-3 ">Easy and convenient online application</h3>
            <p className="mb-4 border dark:border-n500 rounded-md shadow-lg bg-primary/5 dark:bg-bg3 p-4">Apply online for a peer to peer loan from the comfort of your home. Rest assured, our platform is fully secured. </p>
          </div>
        </li>
        <li><div>
            <h3 className="h3 mb-3">Receive a quick response</h3>
            <p className="mb-4 border dark:border-n500 rounded-md shadow-lg bg-primary/5 dark:bg-bg3 p-4">Get a response within 24 hrs on your loan application. Loan offers will be sent directly to your goPeer dashboard. Fast and convenient.</p>
          </div></li>
          <li>
          <div>
            <h3 className="h3 mb-3">Get your money fast</h3>
            <p className="mb-4 border dark:border-n500 rounded-md shadow-lg bg-primary/5 dark:bg-bg3 p-4">Select a loan offer that’s right for you and the funds will be deposited into your bank account via direct deposit.</p>
          </div>
          </li>
          <li>
            <div>
              <h3 className="h3 mb-3">Committed to full transparency</h3>
              <p className="mb-4 border dark:border-n500 rounded-md shadow-lg bg-primary/5 dark:bg-bg3 p-4">goPeer charges borrowers with one single origination fee, the amount of which is dependent on how much you would like to borrow. </p>
            </div>
          </li>
      </ul>
    </div>
  );
}

export default Process;