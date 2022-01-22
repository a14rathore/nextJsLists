import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/list.png" width={128} height={77}/>
                <h1>My List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/list"><a>My Listing</a></Link>
        </nav>
    );
}

export default Navbar;