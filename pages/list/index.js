import Link from 'next/link';
import styles from '../../styles/list.module.css'


export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { lists: data }
    }
}

const List = ({ lists }) => {
    return (
        <div>
            <h1>All List</h1>
            {lists.map((user => (
                <Link href={`/list/` + user.id} key={user.id}>
                    <a className={styles.single}>
                        <h3>{user.name}</h3>
                    </a>
                </Link>
            )))}
        </div>
    )
}

export default List;