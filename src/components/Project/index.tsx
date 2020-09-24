import * as React from "react";

const index = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Projects</h1>
      </header>
      <article>
        <section>
          <h2><a href="https://github.com/briantran98/winged-it">Winged It</a></h2>
          <h3>Summary:</h3>
          <p>A recipe, map and seasonal food resource application that will take in ingredients and output recipes that incorporates those ingredients as its main feature. It also has a map that will show local farmers markets within vancouver and seasonal ingredients</p>
        </section>
        <section>
          <h2><a href="https://github.com/briantran98/cash_n_carry">Cash 'N Carry</a></h2>
          <p>Craigslist clone that has been themed to be more 2000's style internet targeted towards gangsters</p>
        </section>
        <section>
          <h2><a href="https://github.com/briantran98/scheduler">Scheduler</a></h2>
          <p>Scheduling application used to book interviews/appointments with interviewers for the week for a specific time slot</p>
        </section>
        <section>
          <h2><a href="https://github.com/briantran98/jungle">Jungle</a></h2>
          <p>Jungle is an e-commerce site that allows users to add favorites, checkout with with stripe and adding items to cart. Jungle was built with ruby on rails </p>
        </section>
      </article>
    </React.Fragment>
    );
};

export default index;
