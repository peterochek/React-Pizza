import ContentLoader from 'react-content-loader'

const Loading = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox='0 0 280 460'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'>
        <circle cx='120' cy='120' r='120' />
        <rect x='33' y='265' rx='8' ry='8' width='200' height='30' />
        <rect x='0' y='327' rx='16' ry='16' width='270' height='77' />
    </ContentLoader>
)

export default Loading
