import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { RichText } from "hig-react";

import Icon from "../Icon";
import iconSizes from "../sizes";
import readme from "../../README.md";

/** @todo Generate this from build script */
const iconKeys = {
  [iconSizes.PX_24]: [
    "add",
    "archive",
    "assets",
    "attachment",
    "back",
    "bookmark",
    "building-ops",
    "calendar",
    "caret",
    "check-white",
    "checklist",
    "checkmark-blue-dark",
    "checkmark",
    "clear-small",
    "clock",
    "close-hamburger",
    "close-small",
    "close",
    "collaboration",
    "collapse-panel",
    "collapse",
    "comment",
    "compare",
    "complete",
    "copy",
    "cost-control",
    "document-management",
    "double-caret",
    "download",
    "edit",
    "error",
    "expand-panel",
    "expand",
    "export",
    "external",
    "external-link",
    "favorite",
    "field",
    "file-assembly",
    "file-document",
    "file-generic",
    "file-image",
    "file-part",
    "file-pdf",
    "file-presentation",
    "file-spreadsheet",
    "file-video",
    "file-zip",
    "filter-tokens",
    "filter",
    "folder-open",
    "folder",
    "forward",
    "globe",
    "grid",
    "hamburger",
    "help",
    "hidden",
    "home",
    "info",
    "insight",
    "issue",
    "item",
    "layout",
    "list",
    "location",
    "lock",
    "model-coordination",
    "more-vertical",
    "paste",
    "permission-group",
    "permission-individual",
    "photos",
    "placeholder",
    "play",
    "print",
    "products-and-services",
    "profile",
    "project-management",
    "publish",
    "quantities",
    "redo",
    "rfi",
    "save",
    "search",
    "settings",
    "share",
    "sync",
    "tag",
    "trash",
    "undo",
    "unlock",
    "upload",
    "visible",
    "x-close-gray"
  ],
  [iconSizes.PX_16]: [
    "add",
    "archive",
    "assets",
    "attachment",
    "back",
    "bookmark",
    "building-ops",
    "calendar",
    "checkbox-checked",
    "checkbox-indeterminate",
    "checklist",
    "checkmark",
    "clock",
    "close",
    "close-small",
    "collaboration",
    "collapse-panel",
    "comment",
    "compare",
    "complete",
    "copy",
    "cost-control",
    "document-management",
    "download",
    "dropdown-caret-down",
    "dropdown-caret-left",
    "dropdown-caret-right",
    "dropdown-caret-up",
    "edit",
    "error",
    "expand-panel",
    "export",
    "external",
    "external-link",
    "favorite",
    "field",
    "file-assembly",
    "file-document",
    "file-generic",
    "file-image",
    "file-part",
    "file-pdf",
    "file-presentation",
    "file-spreadsheet",
    "file-video",
    "file-zip",
    "filter",
    "filter-tokens",
    "folder",
    "folder-open",
    "forward",
    "globe",
    "grid",
    "help",
    "hidden",
    "home",
    "info",
    "insight",
    "issue",
    "item",
    "layout",
    "list",
    "location",
    "lock",
    "model-coordination",
    "more-vertical",
    "paste",
    "permission-group",
    "permission-individual",
    "photos",
    "placeholder",
    "play",
    "print",
    "products-and-services",
    "profile",
    "project-management",
    "publish",
    "quantities",
    "redo",
    "rfi",
    "save",
    "search",
    "settings",
    "share",
    "sync",
    "tag",
    "trash",
    "undo",
    "unlock",
    "upload",
    "visible"
  ]
};

function Wrapper({ children }) {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "400px"
  };

  return <div style={styles}>{children}</div>;
}

function InnerWrapper({ children }) {
  return <div style={{ paddingRight: "5px" }}>{children}</div>;
}

function IconStory({ size }) {
  const keys = iconKeys[size];

  return (
    <Wrapper>
      {keys.map(name => (
        <InnerWrapper key={name}>
          <Icon name={name} key={name} size={size} />
        </InnerWrapper>
      ))}
    </Wrapper>
  );
}

const stories = [
  {
    label: "size 24",
    size: iconSizes.PX_24
  },
  {
    label: "size 16",
    size: iconSizes.PX_16
  }
];

stories.forEach(({ label, size }) => {
  storiesOf("Icon", module).add(
    label,
    withInfo({
      propTables: [Icon],
      text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
    })(() => <IconStory size={size} />)
  );
});
