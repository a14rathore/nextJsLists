import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
 
    useEffect(() => {
        setTimeout(() => {
            //router.go(-1) back to previousPage
            //router.go(1) go to forword page
            router.push('/') // will go to front Page
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page can not be found.</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
    );
}

export default NotFound;