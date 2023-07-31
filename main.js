import axios from 'axios';

async function getUserEmails(accessToken: string): Promise<any> {
  try {
    const response = await axios.get('https://api.github.com/user/emails', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.log({ functionName: 'getUserEmails', message: 'Error:', error });
    throw new Error('Error fetching user emails from GitHub API');
  }
}

// Replace 'YOUR_ACCESS_TOKEN' with your GitHub access token
const accessToken = 'YOUR_ACCESS_TOKEN';

getUserEmails(accessToken)
  .then((userEmails) => {
    console.log(userEmails);
  })
  .catch((error) => {
    console.error(error);
  });
