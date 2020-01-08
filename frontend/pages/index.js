import Layout from "../components/Layout"
import Link from "next/link"

 const Index = () => {
    return (
        <Layout>
            <h2>I am a child</h2>
            <Link href="/signup">
                <a>Home</a>
            </Link>
            <a href="/signin">Home2</a>
        </Layout>
    )
}

 export default Index;