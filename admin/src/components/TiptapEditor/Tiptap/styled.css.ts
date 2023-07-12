import { Box } from '@strapi/design-system';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  .menubar {
    .is-active {
      background: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.neutral0};
    }

    .button-group {
      border: 0.25em solid ${({ theme }) => theme.colors.neutral100};
    }

    &.floating {
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      background: ${({ theme }) => theme.colors.neutral100};
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }

    button {
      &.medium-icon {
        padding: 7px;

        svg {
          height: 100%;
          width: 100%;
        }
      }

      &.large-icon {
        padding: 6px;

        svg {
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  .has-focus {
    border-radius: 3px;
    box-shadow: 0 0 0 3px #68cef8;
  }

  .ProseMirror {
    outline: none;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.neutral800};
    min-height: 80px;

    > * + * {
      margin-top: 0.75em;
    }

    .ProseMirror-selectednode {
      border: 5px solid ${({ theme }) => theme.colors.neutral800};
      box-sizing: border-box;
    }

    strong {
      font-weight: bold;
    }

    em {
      font-style: italic;
    }

    ul,
    ol {
      margin-left: 1rem;
      padding: 0 1rem;

      li {
        margin-bottom: 0.5rem;

        &:last-child {
          margin-bottom: 0rem;
        }
      }
    }

    ul {
      li {
        list-style: disc;
      }
    }

    ol {
      li {
        list-style: decimal;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 2.25em;
    }

    h3 {
      font-size: 2em;
    }

    h4 {
      font-size: 1.75em;
    }

    h5 {
      font-size: 1.5em;
    }

    h6 {
      font-size: 1.25em;
    }

    code.inline-code {
      background-color: rgba(#616161, 0.1);
      border-radius: 0.25em;
      box-decoration-break: clone;
      color: #616161;
      font-size: 0.9rem;
      padding: 0.25em;
    }

    pre {
      background: #0d0d0d;
      color: #fff;
      font-family: monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;

      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }
    }

    p:has(> img) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      max-width: 100%;
      max-height: 320px;
      height: auto;
      width: auto;
      display: block;

      &.ProseMirror-selectednode {
        outline: 3px solid #68cef8;
      }
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid ${({ theme }) => theme.colors.neutral600};
    }

    hr {
      border: 0;
      border-top: 2px solid ${({ theme }) => theme.colors.neutral600};
      margin: 1rem 0;
    }

    table {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
      border: 1px solid ${({ theme }) => theme.colors.neutral600};
      overflow: hidden;

      th,
      td {
        border: 2px solid ${({ theme }) => theme.colors.neutral600};
        box-sizing: border-box;
        min-width: 1em;
        padding: ${({ theme }) => theme.spaces[2]};
        position: relative;
        vertical-align: top;

        &.selectedCell {
          background: ${({ theme }) => theme.colors.primary500};
        }

        > * {
          margin-bottom: 0;
        }
      }

      th {
        background: ${({ theme }) => theme.colors.neutral300};
        font-weight: bold;
        text-align: center;
        vertical-align: middle;
      }

      .selectedCell:after {
        background: rgba(200, 200, 255, 0.4);
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        pointer-events: none;
        position: absolute;
        z-index: 2;
      }

      .column-resize-handle {
        background-color: #adf;
        bottom: -2px;
        position: absolute;
        right: -2px;
        pointer-events: none;
        top: 0;
        width: 4px;
      }

      p {
        margin: 0;
      }
    }

    .link {
      cursor: pointer;
      text-decoration-line: underline;
      --tw-text-opacity: 1;
      color: color: hsl(var(--in) / var(--tw-text-opacity));

      &.link-primary {
        color: hsl(var(--p) / var(--tw-text-opacity));
      }

      &.link-secondary {
        color: hsl(var(--s) / var(--tw-text-opacity));
      }

      &.link-accent {
        color: hsl(var(--a) / var(--tw-text-opacity));
      }

      &.link-success {
        color: hsl(var(--su) / var(--tw-text-opacity));
      }

      &.link-info {
        color: hsl(var(--in) / var(--tw-text-opacity));
      }

      &.link-warning {
        color: hsl(var(--wa) / var(--tw-text-opacity));
      }

      &.link-error {
        color: hsl(var(--er) / var(--tw-text-opacity));
      }

      &.link-hover {
        text-decoration-line: none;

        &:hover {
          text-decoration-line: underline;
        }
      }
    }

    iframe {
      border: 8px solid #000;
      border-radius: 4px;
      min-width: 200px;
      min-height: 200px;
      display: block;
      outline: 0px solid transparent;
    }

    div[data-youtube-video] {
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ProseMirror-selectednode iframe {
      transition: outline 0.15s;
      outline: 6px solid #ece111;
    }
  }

  mark {
    background-color: #ffe066;
    border-radius: 0.25em;
    box-decoration-break: clone;
    padding: 0.125em 0;
  }

  hr.ProseMirror-selectednode {
    border-top: 1px solid #68cef8;
  }

  .tableWrapper {
    padding: 1rem 0;
    overflow-x: auto;
  }

  .resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
  }

  ul[data-type='taskList'] {
    list-style: none;
    padding: 0;

    p {
      margin: 0;
    }

    li {
      display: flex;

      > label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;

        > input[type='checkbox'] {
          margin-right: 8px;
          flex-shrink: 0;
          --chkbg: var(--bc);
          --chkfg: var(--b1);
          height: 1.25rem;
          width: 1.25rem;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
          border-width: 1px;
          border-style: solid;
          border-color: hsl(var(--bc) / var(--tw-border-opacity));
          --tw-border-opacity: 0.2;
          border-radius: var(--rounded-btn, 0.5rem);
        }

        > input[type='checkbox']:checked {
          --tw-bg-opacity: 1;
          background-color: hsl(var(--bc) / var(--tw-bg-opacity));
          background-repeat: no-repeat;
          animation: checkmark var(--animation-input, 0.2s) ease-in-out;
          background-image: linear-gradient(
              -45deg,
              transparent 65%,
              hsl(var(--chkbg)) 65.99%
            ),
            linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%),
            linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%),
            linear-gradient(
              45deg,
              hsl(var(--chkbg)) 30%,
              hsl(var(--chkfg)) 30.99%,
              hsl(var(--chkfg)) 40%,
              transparent 40.99%
            ),
            linear-gradient(
              -45deg,
              hsl(var(--chkfg)) 50%,
              hsl(var(--chkbg)) 50.99%
            );
        }
      }

      > div {
        flex: 1 1 auto;
      }
    }

    &.taskList-primary {
      li {
        > label {
          > input[type='checkbox'] {
            --chkbg: var(--p);
            --chkfg: var(--pc);
            --tw-border-opacity: 1;
            border-color: hsl(var(--p) / var(--tw-border-opacity));
          }

          > input[type='checkbox']:checked {
            --tw-border-opacity: 1;
            border-color: hsl(var(--p) / var(--tw-border-opacity));
            --tw-bg-opacity: 1;
            background-color: hsl(var(--p) / var(--tw-bg-opacity));
            --tw-text-opacity: 1;
            color: hsl(var(--pc) / var(--tw-text-opacity));
          }
        }
      }
    }

    &.taskList-secondary {
      li {
        > label {
          > input[type='checkbox'] {
            --chkbg: var(--s);
            --chkfg: var(--sc);
            --tw-border-opacity: 1;
            border-color: hsl(var(--s) / var(--tw-border-opacity));
          }

          > input[type='checkbox']:checked {
            --tw-border-opacity: 1;
            border-color: hsl(var(--s) / var(--tw-border-opacity));
            --tw-bg-opacity: 1;
            background-color: hsl(var(--s) / var(--tw-bg-opacity));
            --tw-text-opacity: 1;
            color: hsl(var(--sc) / var(--tw-text-opacity));
          }
        }
      }
    }

    &.taskList-accent {
      li {
        > label {
          > input[type='checkbox'] {
            --chkbg: var(--a);
            --chkfg: var(--ac);
            --tw-border-opacity: 1;
            border-color: hsl(var(--a) / var(--tw-border-opacity));
          }

          > input[type='checkbox']:checked {
            --tw-border-opacity: 1;
            border-color: hsl(var(--a) / var(--tw-border-opacity));
            --tw-bg-opacity: 1;
            background-color: hsl(var(--a) / var(--tw-bg-opacity));
            --tw-text-opacity: 1;
            color: hsl(var(--ac) / var(--tw-text-opacity));
          }
        }
      }
    }

    &.taskList-success {
      li {
        > label {
          > input[type='checkbox'] {
            --chkbg: var(--su);
            --chkfg: var(--suc);
            --tw-border-opacity: 1;
            border-color: hsl(var(--su) / var(--tw-border-opacity));
          }

          > input[type='checkbox']:checked {
            --tw-border-opacity: 1;
            border-color: hsl(var(--su) / var(--tw-border-opacity));
            --tw-bg-opacity: 1;
            background-color: hsl(var(--su) / var(--tw-bg-opacity));
            --tw-text-opacity: 1;
            color: hsl(var(--suc) / var(--tw-text-opacity));
          }
        }
      }
    }

    &.taskList-warning {
      li {
        > label {
          > input[type='checkbox'] {
            --chkbg: var(--wa);
            --chkfg: var(--wac);
            --tw-border-opacity: 1;
            border-color: hsl(var(--wa) / var(--tw-border-opacity));
          }

          > input[type='checkbox']:checked {
            --tw-border-opacity: 1;
            border-color: hsl(var(--wa) / var(--tw-border-opacity));
            --tw-bg-opacity: 1;
            background-color: hsl(var(--wa) / var(--tw-bg-opacity));
            --tw-text-opacity: 1;
            color: hsl(var(--wac) / var(--tw-text-opacity));
          }
        }
      }
    }

    &.taskList-info {
      li {
        > label {
          > input[type='checkbox'] {
            --chkbg: var(--in);
            --chkfg: var(--inc);
            --tw-border-opacity: 1;
            border-color: hsl(var(--in) / var(--tw-border-opacity));
          }

          > input[type='checkbox']:checked {
            --tw-border-opacity: 1;
            border-color: hsl(var(--in) / var(--tw-border-opacity));
            --tw-bg-opacity: 1;
            background-color: hsl(var(--in) / var(--tw-bg-opacity));
            --tw-text-opacity: 1;
            color: hsl(var(--inc) / var(--tw-text-opacity));
          }
        }
      }
    }

    &.taskList-error {
      li {
        > label {
          > input[type='checkbox'] {
            --chkbg: var(--er);
            --chkfg: var(--erc);
            --tw-border-opacity: 1;
            border-color: hsl(var(--er) / var(--tw-border-opacity));
          }

          > input[type='checkbox']:checked {
            --tw-border-opacity: 1;
            border-color: hsl(var(--er) / var(--tw-border-opacity));
            --tw-bg-opacity: 1;
            background-color: hsl(var(--er) / var(--tw-bg-opacity));
            --tw-text-opacity: 1;
            color: hsl(var(--erc) / var(--tw-text-opacity));
          }
        }
      }
    }
  }
`;
