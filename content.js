/*
 * YOUR WEBSITE CONTENT
 * Edit the text between quotation marks, save, then refresh your browser.
 * Keep the commas, brackets, and quotation marks in place.
 * Use double quotes around text; apostrophes inside the text are fine.
 * Pictures: put files in assets/images/ and update the matching image path.
 * All current pictures are original SVG placeholders; replace them any time.
 */
window.siteContent = {
  site: {
    name: "lola",
    label: "A PROJECT JOURNAL",
    title: "Lola — A project journal",
    description: "A space for projects, pictures, and the stories behind them.",
    copyright: "Lola",
    footer: "Made with care, one idea at a time.",
  },
  hero: {
    eyebrow: "A SPACE TO CREATE & SHARE",
    title: "A little space",
    accent: "for big ideas.",
    description: "A home for the things I’m making, the details I notice, and the stories I want to tell. Take a look around.",
    footnote: "A work in progress. Always growing.",
    image: "assets/images/study-01.svg",
    imageAlt: "An original abstract illustration of an arch and warm sunlight",
    imageLabel: "IDEAS TAKING SHAPE",
    note: "Made with curiosity.\nShared with you.",
    caption: "01 / A new perspective",
  },
  intro: "A collection of ideas, experiments, and little discoveries.",
  work: {
    title: "Selected moments.",
    description: "A few things worth a closer look. Each picture has a story behind it.",
  },
  // Add or remove gallery entries. Categories automatically become filter buttons.
  // alt: briefly describe what is in the image for people using screen readers.
  // caption: the longer story, displayed when someone opens a picture.
  gallery: [
    {
      title: "A new perspective",
      category: "Ideas",
      image: "assets/images/study-01.svg",
      alt: "A terracotta arch, a soft green circle, and a long diagonal shadow",
      caption: "Start with a different point of view. Replace this illustration with a picture from your project and tell its story here.",
    },
    {
      title: "Finding a balance",
      category: "Details",
      image: "assets/images/study-02.svg",
      alt: "Folded sage-green paper shapes arranged on a pale background",
      caption: "Sometimes the smallest details make the biggest difference. Use this space for a close-up or a detail you love.",
    },
    {
      title: "Something taking shape",
      category: "Process",
      image: "assets/images/study-03.svg",
      alt: "An abstract rust-colored vase and a branch against a warm cream wall",
      caption: "A little glimpse behind the scenes. This is a place for an early experiment, a sketch, or a work in progress.",
    },
    {
      title: "Quiet observations",
      category: "Details",
      image: "assets/images/study-04.svg",
      alt: "Layered curved lines suggesting hills in muted green and sand colors",
      caption: "A moment worth pausing for. Add your own picture and describe what makes it meaningful to your project.",
    },
    {
      title: "The in-between",
      category: "Process",
      image: "assets/images/study-05.svg",
      alt: "A geometric arrangement of cream, charcoal, and terracotta paper pieces",
      caption: "Not everything needs to be finished to be worth sharing. Document the steps along the way here.",
    },
    {
      title: "Room for possibility",
      category: "Ideas",
      image: "assets/images/study-06.svg",
      alt: "A golden circle framed by a large green arch on a light background",
      caption: "A space for whatever comes next. Replace this placeholder with another piece of your story.",
    },
  ],
  about: {
    title: "Every project starts",
    accent: "with a little curiosity.",
    // Each entry becomes its own paragraph. Add more if needed.
    paragraphs: [
      "This is a space to document a project as it grows: the early ideas, the experiments, and everything in between.",
      "Over time, these pages will fill with pictures, stories, and things learned along the way. For now, this is the beginning. Thanks for being here.",
    ],
  },
  notes: {
    title: "Notes along the way.",
    description: "Thoughts, small updates, and what’s coming next.",
    items: [
      { label: "THE BEGINNING", title: "A place to start", text: "Every project needs a home. This is mine: a space to collect ideas and share the journey as it unfolds." },
      { label: "IN PROGRESS", title: "Making room for ideas", text: "Right now, I’m collecting inspiration, trying things out, and figuring out what this project can become." },
      { label: "LOOKING AHEAD", title: "More to come", text: "New pictures, stories, and updates will find their way here. There’s plenty of room to grow." },
    ],
  },
  contact: {
    title: "Good things start",
    accent: "with a conversation.",
    description: "Have a question or an idea? There’s always room for a new connection.",
    // Optional: add a public contact email to show a working “Say hello” button.
    // Leave empty to show “Contact details coming soon.” Never put passwords here.
    email: "",
  },
};