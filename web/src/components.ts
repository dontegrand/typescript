namespace Componets {

  // 子命名空间
  export namespace SubCompontents {
    export class SubContent {
      constructor() {
        const subcontent = document.createElement('div')
        subcontent.innerText = 'this is subcontent'
        document.body.appendChild(subcontent)
      }
    }
  }
  
  export class Header {
    constructor() {
      const header = document.createElement('div')
      header.innerText = 'this is Header'
      document.body.appendChild(header)
    }
  }
  export class Content {
    constructor() {
      const header = document.createElement('div')
      header.innerText = 'this is Content'
      document.body.appendChild(header)
    }
  }
  export class Footer {
    constructor() {
      const header = document.createElement('div')
      header.innerText = 'this is Footer'
      document.body.appendChild(header)
    }
  }
}