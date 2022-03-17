export const Heading = (props) => {
  // props
  // props digunakan untuk lempar lemparan data di frontend
  console.log(props);
  const { title, yangLaen, count, alertAja } = props;
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => alertAja(' iya ini alert ')}>
        increment satu
      </button>
    </>
  );
};

// export const Heading = ({ title, yangLaen }) => {
//   // props
//   // props digunakan untuk lempar lemparan data di frontend
//   return <h1 style={{ color: 'red' }}>{yangLaen}</h1>;
// };
