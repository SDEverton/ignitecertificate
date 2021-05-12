import { document } from '../utils/dynamodbClient';

interface ICreateCertificate {
  id: string;
  name: string;
  grade: string;
}

export const handle = async (event) => {
  const { id, name, grade } = JSON.parse(event.body) as ICreateCertificate;
  console.log({ id, name, grade })

  await document.put({
    TableName: "users_certificates",
    Item: {
      id,
      name,
      grade
    }
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Cretificate created!"
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
};
