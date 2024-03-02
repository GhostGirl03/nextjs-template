import Link from "next/link";
import {Container} from "react-bootstrap";

export default function Home(){
   return(
    <Container>
      <p>Template created by Nyli </p>
      <Link href="/about">About</Link>
    </Container>
   );

}