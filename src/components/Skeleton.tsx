import React from 'react'
import ContentLoader from 'react-content-loader'
import { ProductContainer } from '../styles/pages/product'

export const Skeleton = (props) => (
  <ProductContainer>
    <div>
      <ContentLoader
        width={576}
        height={500}
        viewBox="0 0 576 656"
        backgroundColor="linear-gradient(180deg, #1ea483 0%, #7465d4 100%)"
        foregroundColor="#202024"
        {...props}
      >
        <rect x="55" y="42" rx="16" ry="16" width="520" height="656" />
      </ContentLoader>
    </div>
    <div>
      <ContentLoader
        width={576}
        height={600}
        viewBox="0 0 700 600"
        backgroundColor="linear-gradient(180deg, #1ea483 0%, #7465d4 100%)"
        foregroundColor="#202024"
        {...props}
      >
        <rect x="5" y="100" rx="" ry="3" width="400" height="6" />
        <rect x="5" y="130" rx="" ry="3" width="400" height="6" />
        <rect x="5" y="160" rx="" ry="3" width="400" height="6" />
        <rect x="5" y="190" rx="" ry="3" width="400" height="6" />
        <rect x="5" y="220" rx="" ry="3" width="400" height="6" />

        <rect x="5" y="500" rx="14" ry="14" width="500" height="46" />

        <rect x="5" y="0" rx="3" ry="3" width="350" height="35" />
      </ContentLoader>
    </div>
  </ProductContainer>
)
