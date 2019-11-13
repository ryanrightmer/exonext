import { useRouter } from 'next/router'
import Layout from '../../components/layout';

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(router.query);

  return <Layout><p>Exoplanet: {id}</p></Layout>
}

export default Post