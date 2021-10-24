import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Page = ({blok}) => (
  <SbEditable content={blok}>
    <main> 
 
    <div class="grid grid-cols-3 gap-4 text-sm">
    {blok.body ? blok.body.map((blok) =>
        <DynamicComponent blok={blok} key={blok._uid} />
      ) : null}
    </div>
     
    
    
    </main>¯
  </SbEditable>
)

export default Page


