import { Carousel, Typography } from '@material-tailwind/react'

function Home() {
  return (
    <Carousel>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Ullamco elit culpa occaecat ex qui adipisicing anim nulla eu.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Consectetur consequat Lorem dolor duis ad Lorem cillum nisi
              occaecat exercitation ipsum. Eiusmod ut aliqua proident sunt qui
              mollit laboris nostrud ea adipisicing velit non aliqua. Enim
              incididunt quis mollit commodo.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Dolore nulla ex adipisicing laboris culpa incididunt esse nostrud
              est pariatur cupidatat Lorem sit enim.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Pariatur laborum quis aliqua occaecat. Tempor consectetur
              incididunt fugiat exercitation aute reprehenderit anim. Proident
              nostrud nulla ea ad.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Do occaecat ea aliquip ullamco Lorem consectetur occaecat esse
              aliqua irure consequat voluptate sint.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Magna cillum incididunt aliqua esse culpa adipisicing elit enim
              sint deserunt. Ea aliquip velit id qui ea aliquip ut consequat
              deserunt qui. Voluptate voluptate do consectetur voluptate do qui
              consectetur sunt eu. Non deserunt elit reprehenderit reprehenderit
              voluptate occaecat ea ea. Adipisicing tempor nulla ullamco minim
              laboris cillum nulla cillum officia.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  )
}

export default Home
