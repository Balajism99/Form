

export const PostData = (data) => async() => {


         await fetch(`http://localhost:9000/createUser`, {
            method: 'POST',
            body: JSON.stringify(data),
          })
          console.log(data)
}
