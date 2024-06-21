import { Link } from "@chakra-ui/next-js";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function PostCard({ metaData, name }) {
  console.log(metaData);
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md">{metaData.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{metaData.description}</Text>
      </CardBody>
      <CardFooter>{metaData.author}</CardFooter>
      <Link href={`posts/${name}`}>Read about it here!</Link>
    </Card>
  );
}
