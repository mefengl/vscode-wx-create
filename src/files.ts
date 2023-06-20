interface WxFile {
  [index: string]: string;
}

/**
 * 
 * @param name file name
 */export const files = function (name: string): {
  page: WxFile,
  components: WxFile
} {
  const page = {
    js: `
Page({
})`
    ,
    // wxss: `/**${name}.wxss**/`,
    scss: ``,
    json: `
{
"usingComponents": {}
}`,
    wxml: ``
  };
  const components = {
    js: `
Component({
})

`,
    json: `
{
  "component": true,
  "usingComponents": {}
}
  `,
    //    wxss: `
    // /**
    //  * ${name}
    //  */
    // `,
    scss: ``,
    wxml: ``
  };
  return {
    page,
    components
  };
};
