import Teaser from './Teaser'
import Feature from './Feature'
import FeaturedPosts from './FeaturedPosts'
import Grid from './Grid'
import Placeholder from './Placeholder'
import PostsList from './PostsList'
import Page from './Page'
import BlogPost from './BlogPost'
import Text from './Text'
import EventDashboard from './EventDashboard'
import OrganizerDashBoard from './OrganizerDashBoard'
import SponsorProfile from './SponsorProfile'
import Eventcard from './Eventcard'
const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'featured-posts': FeaturedPosts,
  'page': Page,
  'post': BlogPost,
  'text': Text,
  'selected-posts': PostsList,
  'EventDashboard': EventDashboard,
  'eventcard': Eventcard,
  'OrganizerDashBoard': OrganizerDashBoard,
  'SponsorProfile':SponsorProfile
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    if (Components.EventDashboard)
      return <>
              <Component blok={blok} />
      </>

    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component} />
}

export default DynamicComponent
