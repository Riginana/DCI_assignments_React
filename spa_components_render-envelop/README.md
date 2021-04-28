This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Overview

**envelope**

Create an `Envelope` component that takes `toPerson` and `fromPerson` as props and uses the following `Address Data` to display the return address and the recipient address in an `AddressLabel`. Make sure to include a `Stamp` too! 

Think about:
- where to define the Address Object
- How many and which Components you need and
- how you distribute the necessary data to your respective Components.

Address-Object: 
```
const fromPerson = {
  fullName: 'Julian Perge',
  address: '123 Blank Street',
  cityStateZip: 'Columbus, OH 43203',
};

const toPerson = {
  fullName: 'Perge Julian',
  address: '321 Blank Street',
  cityStateZip: 'San Francisco, CA 43204',
};
```

![](https://i.imgur.com/ZfbWp0R.png)
