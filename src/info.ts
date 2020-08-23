interface Person {
  name: string;
  phoneNumber: string;
	email: string;
	about: string;
  // github: string;
  // githubLink: string;
  // linkedIn: string;
}

const me: Person = {
  name: "Brian Tran",
  phoneNumber: "778-997-9373",
	email: "98brian.tran@gmail.com",
	about: "full stack web developer with a background in intelligence and a great love for technology. As a child, I enjoyed tinkering with the hardware inside computers and game consoles just to see how things worked. That curiosity translated into the world of code and I've never looked back. Excited to put my creativity and outside-of-the box thinking to your team, I look forward to a career in development."
  // github: "briantran98",
  // githubLink: "https://github.com/briantran98",
  // linkedIn: "https://www.linkedin.com/in/brian-tran-649968a7/"
};

export { me };
