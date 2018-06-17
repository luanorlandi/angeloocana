webpackJsonp([27581280475609],{1146:function(e,a){e.exports={data:{markdownRemark:{fileAbsolutePath:"/home/luanorlandi/git/angeloocana/src/pages/blog/linux/arch/backup-android-files.pt.md",html:'<p>O seu telefone esta lotado? Faça backup dos seus arquivos pro Arch Linux.\nVai ser fácil seguindo este tutorial (Eu espero hahaha).\nEu tive alguns problemas com outros programas (android-file-transfer e mtpfs),\nsegue aqui o que funcionou comigo, espero que ajude:</p>\n<h2>Instalar simple-mtpfs</h2>\n<p>Se você não tem ou não sabe o que é <strong>Yaourt</strong>, por favor confira aqui primeiro:\n<a href="https://angeloocana.com/en/blog/linux/arch/install-yaourt/">https://angeloocana.com/en/blog/linux/arch/install-yaourt/</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    yaourt -S simple-mtpfs\n</code></pre>\n      </div>\n<h2>Criar pasta de destino</h2>\n<p>Eu vou usar a pasta <strong>~/mnt</strong>, você pode usar qualquer uma, mas lembre-se dela para a próxima etapa.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">mkdir</span> ~/mnt\n</code></pre>\n      </div>\n<h2>Monte seu telefone para uma pasta</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    simple-mtpfs --device 1 ~/mnt\n</code></pre>\n      </div>\n<p>É isso ai! uhuhuh\nAcesse a pasta <strong>~/mnt</strong>, seus arquivos estão lá!</p>\n<p>Guia oficial: <a href="https://wiki.archlinux.org/index.php/MTP">https://wiki.archlinux.org/index.php/MTP</a></p>',excerpt:"O seu telefone esta lotado? Faça backup dos seus arquivos pro Arch Linux.\nVai ser fácil seguindo este tutorial (Eu espero hahaha).\nEu tive…",fields:{tagSlugs:[{tag:"Linux",link:"/pt/tags/linux/"},{tag:"Arch",link:"/pt/tags/arch/"},{tag:"Android",link:"/pt/tags/android/"}],slug:"/pt/blog/linux/arch/backup-android-files/",readNextPosts:[{excerpt:"Install git Install Nodejs Install NPM Fix global permissions error https://docs.npmjs.com/getting-started/fixing-npm-permissions Make a…",frontmatter:{title:"Setup dev env Arch linux",date:"2017-07-30"},fields:{slug:"/pt/blog/linux/arch/setup-nodejs-env/",langKey:"pt"}},{excerpt:"Francês é maravilhoso, melhores filmes do mundo, pessoas autênticas, engraçadas e encantadoras, eu amo franceses! aqui segue minha coleção…",frontmatter:{title:"Aprenda Francês (Links)",date:"2017-08-03"},fields:{slug:"/pt/blog/languages/french/learn-french-links/",langKey:"pt"}},{excerpt:"Habilite auto complete, Commit com titulo e descrição, navege pelo histórico, atualize fork e muito mais! Habilitar auto complete ao digitar…",frontmatter:{title:"Git comandos Avançados",date:"2017-06-23"},fields:{slug:"/pt/blog/git/git-setup/",langKey:"pt"}}]},frontmatter:{youtubeId:null,title:"Como salvar fotos do celular pro Arch Linux",tags:["Linux","Arch","Android"],date:"2017-08-30",structuredData:{type:"TechArticle",author:"angeloocana",dependencies:"Arch Linux e Celular Android",proficiencyLevel:"Beginner",articleSection:"Arch Linux",pageEnd:null,pageStart:null,pagination:null,about:{name:"Arch Linux",alternateName:"Arch",description:"lightweight and flexible Linux® distribution that tries to Keep It Simple.",identifier:"arch-linux",image:null,sameAs:"https://www.archlinux.org/"},accessMode:"textual",accessModeSufficient:"textual",accessibilityAPI:"ARIA",accessibilityControl:"fullKeyboardControl, fullTouchControl, fullMouseControl",accessibilitySummary:null,aggregateRating:"...",audience:"...",alternativeHeadline:"...",comment:"...",commentCount:"...",contentLocation:"...",dateCreated:"2017-08-26",dateModified:"2017-08-28",datePublished:"2017-08-28",discussionUrl:"...",educationalUse:"...",isAccessibleForFree:!0,isFamilyFriendly:!0,keywords:"...",locationCreated:"Ottawa CA",thumbnailUrl:"...",version:1,video:"..."}}}},pathContext:{path:"/pt/blog/linux/arch/backup-android-files/",langKey:"pt"}}}});
//# sourceMappingURL=path---pt-blog-linux-arch-backup-android-files-701f76bc7d0f3fe62ebd.js.map