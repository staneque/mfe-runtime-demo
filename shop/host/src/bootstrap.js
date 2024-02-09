import { mount as mountListing } from 'listing/ListingComponent'
import { mount as mountCart } from 'cart/CartComponent'

const listingRoot = document.getElementById('listing-root')
const cartRoot = document.getElementById('cart-root')

mountListing(listingRoot)
mountCart(cartRoot)
