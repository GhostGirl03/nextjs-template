import Link from "next/link";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <p>
        Template created by Nyli Guzman</p>  
        <Link href='/'>Home</Link> 
    </Container>
  );
}