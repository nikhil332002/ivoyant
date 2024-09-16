import './App.css';
import Parent from './callback/Parent';
import Form from './form/Form';
import Counter from './counter/Counter';
import { useGetUsersQuery, usePostUserMutation } from './services/Api';
import { useEffect } from 'react';

function App() {
  // const { data, isError, isLoading, isSuccess } = useGetUsersQuery();
  const [postData,{isError,isLoading,isSuccess}] = usePostUserMutation();
  console.log(isError,isLoading,isSuccess);

  // Post data only once when the component mounts
  useEffect(() => {
    const postDataAsync = async () => {
      try {
        await postData({
          userId: 355,
          id: 555,
          title: 'quidem molestiae enim',
        }).unwrap();
        console.log('Post request successful');
      } catch (error) {
        console.error('Failed to post data', error);
      }
    };

    postDataAsync(); // Call the method inside useEffect
  }, []);

  // console.log('Data from API:', data);

  return (
    <>
      {/* <Parent/> */}
      {/* <Counter/> */}
      {/* <Form/> */}
      {/* <Form/> */}
      {/* <Parent/> */}
      <Counter />
    </>
  );
}

export default App;
