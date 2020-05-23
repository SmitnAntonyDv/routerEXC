const myboolean = true;
const myinteger = 23412342134;

const myarray = [myboolean, myinteger];

myarray[0]; // true
myarray[1]; //

const myobject = {
  mykey: "myValue",
  mASDASDyData: myarray,
};

const mynewobject = {
  ...myobject,
  asd: [myboolean],
};

mynewobject.asd.map();

const a = (props) => {
  const { title, year, blah: HELLO } = props;

  console.error(title, HELLO);
};
