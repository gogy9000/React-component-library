export const RequestsAPI = {
    post: (isChecked: boolean) => {
        return fetch(`https://neko-cafe-back.herokuapp.com/auth/test`,
            {
                method: 'POST',
                body: JSON.stringify({success: isChecked}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}