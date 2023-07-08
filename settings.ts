const config = {
  align: ['left', 'center', 'right'],

  blockquote: true,
  bold: true,
  bulletList: {
    enabled: true,
  },

  code: true,
  color: true,
  // columns: ['two', 'three'],

  focus: false,

  hardbreak: true,
  headings: ['h1', 'h2', 'h3', 'h4', 'h4', 'h5', 'h6'],
  highlight: true,
  horizontal: true,

  image: {
    enabled: true,
    inline: true,
    allowBase64: false,
  },
  italic: true,

  links: {
    enabled: true,
    autolink: false,
    openOnClick: false,
    linkOnPaste: true,
    relAttribute: false,
    HTMLAttributes: {
      rel: undefined,
    },
  },

  orderedList: {
    enabled: true,
    disabledShorthand: false,
  },
  other: {
    wordcount: false,
    saveJson: false,
  },

  strikeThrough: true,

  table: true,

  underline: true,

  youtube: {
    enabled: true,
    height: 480,
    width: 640,
  },
};

export default config;
