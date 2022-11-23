import _ from 'lodash';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { mapState, mapActions } from 'vuex';
import FroalaEditor from 'froala-editor';
import Tribute from 'tributejs';
import * as hangul from 'hangul-js'; // 한글을 자음/모음으로 분리하여 문자들의 배열로 리턴하는 라이브러리
// import { searchItem, getMarketName, getHostUrl, htmlToText } from 'utils/common';
import { lang, i18n } from 'boot/i18n';

let editor = null;
let oglinkboxWaitor = {};

const FroalaMixin = {
    data() {
        return {
            config: null,
            editor: null
        };
    },
    computed: {
    },
    async mounted() {
        const self = this;

        // 최신조회종목 조회
        // const seenItemList = await this.$store.dispatch(this.$utils.getDivCode() === 1 ? 'stock/getSeenStockList' : 'coin/getSeenCoinList');
        // const latestItems = _.compact(seenItemList.map(val => _.find(this.issueCodeList, this.$utils.getDivCode() === 1 ? { isuSrtCd: val } : { id: val })))
        //     .map(val => {
        //         return this.$utils.getDivCode() === 1 ? { ...val, code: val.isuSrtCd, name: val.isuKorNm, marketName: this.$utils.getMarketName(val.market), checked: false } : { ...val, code: val.id, ticker: val.symbol, checked: false };
        //     });

        this.config = {
            key: '2J1B10dB4C4D4D3D4D3cWHNGGDTCWHId1Eb1Oc1Yh1b2Ld1POkE3D3F3B8A4A4D4G3H3B2==',
            heightMin: 120,
            attribution: false,
            placeholderText: i18n.t('froalaMixin.defaultPlaceHolder'),
            charCounterCount: true,
            charCounterMax: 10000,
            imagePasteProcess: true,
            imageResizeWithPercent: true,
            // imageUploadRemoteUrls: true,
            // imageUploadURL: 'http://i.froala.com/upload',
            pastePlain: true,
            pasteAllowedStyleProps: ['font-size', 'color', 'font-weight', 'background'],
            pasteDeniedAttrs: ['id'],
            codeMirror: false,
            dragInline: true,
            spellcheck: false,
            toolbarButtons: {
                moreText: {
                    buttons: ['bold', 'insertImage', 'insertVideo', 'insertTable'],
                    align: 'left',
                    buttonsVisible: 5
                },
                moreMisc: {
                    buttons: ['undo', 'redo'],
                    align: 'right'
                }
            },
            imageInsertButtons: ['imageBack', '|', 'imageUpload', 'imageByURL'],
            videoInsertButtons: ['videoByURL'],
            fontFamily: {
                'Noto Sans KR': 'Noto Sans'
            },
            fontFamilyDefaultSelection: 'Noto Sans',
            // fontFamilySelection: true,
            quickInsertButtons: [/* 'image', 'table' */],
            quickInsertEnabled: false,
            // codeBeautifierOptions: {
            //     end_with_newline: true,
            //     indent_inner_html: true,
            //     extra_liners: "['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'ul', 'ol', 'table', 'dl']",
            //     brace_style: 'expand',
            //     indent_char: ' ',
            //     indent_size: 4,
            //     wrap_line_length: 0
            // },
            language: lang || 'ko',
            imageMaxSize: 1024 * 1024 * 3,
            imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif'],
            allowedBlankTags: ['div', 'br'],
            linkAlwaysBlank: true,
            // toolbarButtons: ['bold', 'italic', 'html'],
            events: {
                initialized: (() => {
                    console.log('initialized');
                    const issueCodeList = this.issueCodeList;

                    return function() {
                        editor = this;
                        self.editor = this;
                        const tribute = new Tribute({
                            trigger: '$',
                            selectClass: 'tribute-highlight',
                            menuContainer: document.body,
                            positionMenu: true,
                            menuShowMinLength: 1,
                            values: function(text, cb) {
                                // console.log('val', text, _.slice(searchItem(text, issueCodeList, 'isuKorAbbr'), 0, 7));
                                if (text === '' && latestItems.length > 0) {
                                    cb(latestItems);
                                } else {
                                    cb(_.slice(_.concat(searchItem(text, issueCodeList, 'isuKorAbbr'), searchItem(text, issueCodeList, 'name')), 0, 20));
                                }
                            },
                            // lookup: 'name',
                            lookup: function(item, inputText) {
                                return item.isuKorAbbr ? item.isuKorAbbr + item.isuSrtCd + hangul.d(item.isuKorAbbr, true).map(val => val[0]).join('') : item.name + item.id;
                            },
                            // fillAttr: 'isuKorAbbr',
                            menuItemTemplate: function(item) {
                                // console.log('menuItemTemplate', item);
                                return item.original.isuKorAbbr ? `<div class="fr-deletable fr-tribute row stock-tag-list-item" style="justify-content: space-between;" data-tag-name="${item.original.isuKorAbbr}" data-tag-code="${item.original.isuSrtCd}"><div class="flex-1 ellipsis">${item.original.isuKorAbbr}</div><div class="code">${item.original.isuSrtCd} ${getMarketName(item.original.market)}</div></a></div>` : `<div class="fr-deletable fr-tribute row stock-tag-list-item" style="justify-content: space-between;" data-tag-name="${item.original.name}" data-tag-code="${item.original.id}" data-tag-symbol="${item.original.symbol}"><div class="flex-1 ellipsis">${item.original.name}</div><div class="code">${item.original.symbol}</div></a></div>`;
                            },
                            selectTemplate: function(item) {
                                // console.log('this.range.isContentEditable(this.current.element)', this.current.element, this.range);
                                return item.original.isuKorAbbr ? `<span class="fr-deletable fr-tribute stock-tag" contenteditable="false" data-tag-name="${item.original.isuKorAbbr}" data-tag-code="${item.original.isuSrtCd}">$${item.original.isuKorAbbr}</span>` : `<span class="fr-deletable fr-tribute stock-tag" contenteditable="false" data-tag-name="${item.original.name}" data-tag-code="${item.original.id}" data-tag-symbol="${item.original.symbol}">$${item.original.name}</span>`;
                            },
                            noMatchTemplate: function() {
                                return `<div class="fr-deletable fr-tribute row stock-tag-list-item">${self.$t('template.label1')}</div>`;
                            }
                        });
                        tribute.attach(editor.el);
                        editor.events.on('keydown', function(e) {
                            if (e.which === FroalaEditor.KEYCODE.ENTER && tribute.isActive) {
                                return false;
                            }
                        }, true);

                        // 브라우저에서 드래그해서 이미지나 영상 또는 gif를 넣을경우 파일이 업로드되지않고 그대로 해당사이트의 Url이 입력되어버린다. 이를막는 코드
                        // https://github.com/froala/wysiwyg-editor/issues/1811
                        editor.events.on('drop', function(e) {
                            e.preventDefault();
                            return false;
                        }, true);
                    };
                })(),
                'html.set': function() {
                    // console.log('html.set');
                    setTimeout(() => {
                        if (self.onChangedImageList) self.onChangedImageList(self.getImageList());
                    }, 0);
                },
                focus: function(e) {
                    // console.log('focus');
                },
                'image.beforeUpload': function(images) {
                    // 이미지를 선택해서 넣었을때
                    // console.log('image.beforeUpload', images);
                    const editor = this;
                    const tempImg = editor.image.get();
                    (async() => {
                        self.$store.dispatch('common/showLoading');
                        await self.uploadImage(images[0]).then(imgUrl => {
                            console.log('uploaded imgUrl', imgUrl, tempImg);
                            editor.image.insert(imgUrl, null, null, tempImg);
                            self.$store.dispatch('common/hideLoading');
                        }).catch(err => {
                            console.error('이미지 업로드 실패', err);
                            self.$store.dispatch('common/hideLoading');
                        });
                        // Stop default upload chain.
                        editor.popups.hideAll();
                    })();
                    return false;
                },
                // 이미지 업로드에 실패했을때 - 문구를 바꿀 방법이 없음. file.min.js 안에 밖혀있는데 어떻게 바꿔야할지..
                // 'image.error': function(error, response) {
                //     if (error) {
                //         console.error('image.error', error);
                //     }
                //     return false;
                // },
                // 내용이 변경되었을때
                contentChanged: function() {
                    // const firstLinkElmt = this.$el[0].querySelector('a');
                    const allLinkElmt = Array.from(this.$el[0].querySelectorAll('a:not([data-oglink="1"])'));
                    if (allLinkElmt.length) {
                        allLinkElmt.map(el => {
                            if (oglinkboxWaitor[el.href]) clearTimeout(oglinkboxWaitor[el.href]);
                            oglinkboxWaitor[el.href] = setTimeout(() => self.setOgLinkBox(el), 1000);
                        });
                    }

                    // 이미지 리스트 listen
                    if (self.onChangedImageList) self.onChangedImageList(self.getImageList());
                },
                // 링크가 트리거 되었을때
                'url.linked': function(link) {
                    // 반응이 이상해서 못씀
                },
                // // 붙여넣기가 실행됬을때
                // 'paste.before': function(event) {
                //     console.log('paste.before', this, event);
                // },
                'paste.beforeCleanup': function(clipboard_html) {
                    const noStyleContent = htmlToText(clipboard_html);
                    // console.log('paste.beforeCleanup', clipboard_html, noStyleContent);
                    return noStyleContent.replace(/\n/g, '<br>');
                }
            }
        };
    },
    methods: {
        // 콘텐츠에 포함된 이미지 업로드
        async uploadImage(img) {
            const ext = img.name ? img.name.replace(/^.*\.([a-z]+)$/i, '$1') : 'png';
            const imgFilePath = `${process.env.CONTENT_IMG_PATH}${moment().format('YYYYMMDD')}/${uuidv4()}.${ext}`;
            const storageRef = this.$storage.ref();
            const ref = storageRef.child(imgFilePath);
            await ref.put(img);
            const imgUrl = `${process.env.IMG_URL}${imgFilePath}`;
            return imgUrl;
        },
        // 본문안에 있는 종목태그들을 리스트로 리턴
        getStockTags() {
            try {
                const doc = this.editor.$el[0];
                return _.uniqWith(Array.from(doc.querySelectorAll('span[data-tag-name]'))
                    .map(val => (val.getAttribute('data-tag-symbol') ? { name: val.getAttribute('data-tag-name'), code: val.getAttribute('data-tag-code'), ticker: val.getAttribute('data-tag-symbol') } : { name: val.getAttribute('data-tag-name'), code: val.getAttribute('data-tag-code') })), _.isEqual);
            } catch (err) {
                console.log(err);
            }
            return [];
        },
        // 본문안에 있는 종목태그들을 리스트로 리턴
        getImageList() {
            try {
                const doc = this.editor.$el[0];
                return _.uniqWith(Array.from(doc.querySelectorAll('img')).map(val => val.src.replace(`https:${process.env.IMG_URL}`, process.env.IMG_URL)), _.isEqual);
            } catch (err) {
                // console.log(err);
            }
            return [];
        },
        // 본문안에 있는 링크 & 영상 & 이미지 에 대한 정보를 리스트로 리턴
        getLinkContents() {
            console.log('this.editor', this.editor);
            const allLinkElmt = Array.from(this.editor.$el[0].querySelectorAll('.fr-video > iframe, img, a[data-ogurl]'));
            const linkList = allLinkElmt.map(el => {
                if (String(el.tagName).toUpperCase() === 'IFRAME') {
                    return {
                        type: 'mov',
                        url: el.src
                    };
                } else if (String(el.tagName).toUpperCase() === 'IMG') {
                    const url = (el.src).replace(`https:${process.env.IMG_URL}`, process.env.IMG_URL);
                    return {
                        type: 'img',
                        url
                    };
                } else if (String(el.tagName).toUpperCase() === 'A') {
                    return {
                        type: 'link',
                        url: el.dataset.ogurl,
                        title: el.dataset.ogtitle,
                        description: el.dataset.ogdesc,
                        rel_image: el.dataset.ogimage
                    };
                }
            });
            return linkList;
        },
        async setOgLinkBox(el) {
            try {
                const url = el.href;
                const { representativeUrl, representativeTitle, representativeDesc, representativeImage } = await this.$utils.getOgInfo(url);

                if (representativeTitle) {
                    const html = `
                    <a href="${url}" class="og-link-box fr-embedly fr-draggable cursor-pointer ellipsis row" target="_blank" data-oglink="1" rel="noopener noreferrer nofollow">
                        ${representativeImage ? `<div class="og-link-image" style="background: url(${representativeImage}) center center / cover no-repeat"></div>` : ''}
                        <div class="flex-1 ellipsis">
                            <div class="og-link-title ellipsis f-14-b-gt">${representativeTitle}</div>
                            <div class="og-link-url ellipsis f-12-500-gt">${representativeUrl}</div>
                        </div>
                    </a>`;
                    const newEl = document.createElement('div');
                    newEl.innerHTML = html.trim().replace(/>\s{2,}</g, '><');
                    newEl.style.display = 'inline-block';
                    newEl.style.width = '100%';
                    newEl.style.maxWidth = '100%';
                    newEl.contentEditable = false;
                    newEl.className = 'fr-deletable fr-draggable';
                    el.setAttribute('data-oglink', 1);
                    el.setAttribute('data-ogurl', representativeUrl);
                    el.setAttribute('data-ogtitle', representativeTitle);
                    el.setAttribute('data-ogdesc', representativeDesc);
                    el.setAttribute('data-ogimage', representativeImage);
                    const newEl2 = document.createElement('p');
                    newEl2.innerHTML = '<span>&nbsp;</span>';
                    const wrapEl = document.createElement('p');
                    wrapEl.innerHTML = newEl.outerHTML;
                    // el.parentNode.insertBefore(newEl2, el.nextSibling);
                    el.parentNode.parentNode.insertBefore(newEl2, el.parentNode.nextSibling);
                    el.parentNode.parentNode.insertBefore(wrapEl, el.parentNode.nextSibling);
                    // console.log('el.parentNode', el.parentNode);
                    // el.parentNode.appendChild(wrapEl);
                } else {
                    el.setAttribute('data-oglink', 1);
                }
            } catch (err) {}
        },
        /**
         * collection 에서 name 값으로 검색
         * @param searchKey collection 에서 검색을 할때 키가 되는 값. default: name
         * @example sortByName([ { name: '삼성전자' } ], '삼성')
         * @example sortByName([ { key: '001234', value: '삼성전자' } ], '123', 'key')
         */
        searchItem(searchText, searchItems, searchKey) {
            const key = searchKey || 'isuKorAbbr';
            const result = _.chain(searchItems)
                .filter(o => {
                    try {
                        if (searchText === '') return true;
                        const regExp = new RegExp(searchText.replace(/\//g, '\\/').replace(/\\/g, '\\\\'), 'i');
                        if (regExp.test(o[key])) return true;
                        if (hangul.search(o[key], searchText) > -1) return true;
                        return hangul.search(hangul.d(o[key], true).map(val => val[0]).join(''), searchText) > -1;
                    } catch (err) {
                        // console.error(err);
                    }
                    return false;
                }).value();
            return result;
        },
        getMarketName(market) {
            switch (market) {
            case 'kospi':
                return i18n.t('market.kospi');
            case 'kosdaq':
                return i18n.t('market.kosdaq');
            case 'etf':
                return 'ETF';
            case 'elw':
                return 'ELW';
            default:
                return market;
            }
        },
        // HTML을 plaintext 값으로(br을 인식하기 위한)
        htmlToText(html) {
            const div = document.createElement('div');
            document.body.append(div);
            div.innerHTML = html;
            const text = div.innerText;
            div.remove();
            return text;
        }        
    }
};

export default FroalaMixin;
