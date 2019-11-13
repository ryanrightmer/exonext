import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(router.query);

  return <p>Exoplanet: {id}</p>
}

export default Post