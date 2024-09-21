import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'zf63yspn',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true,
    token: 'skQF37Yd50X8ypIOyXk09JwrLaxRelm9EFqHZkA96ZzPBrnHCICVNblBHUd2F6eABMxMWZ5QlwqrlclDQIZebsdYRBAiT6uo8qM51L1AJ3owr2uBQ1A9Uh57LCiRY3uLU8F934jEx8cOFhu8iZMnKAmDzhY1Mq4NxS3DpeOIuRkgJp04Wdc1',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)