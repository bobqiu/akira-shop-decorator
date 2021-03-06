const topToolBar = {
    name: '顶部工具条',
    componentName: 'common-top-tool-bar',
    icon: 'icon-ak-top-tool-bar',
    property: {
        left: {
            text: '返回',
            icon: 'back',
            color: '',
            visible: true,
            clickConfig: {
                debug: true,
                type: 0,
                navigationConfig: {
                    page: '',
                    url: '',
                    type: 0
                },
                toastConfig: {
                    title: '',
                    icon: '', //success , loading,none
                    mask: false,
                    duration: 1500,
                    position: '' //top ,center,bottom
                },
                modalConfig: {
                    title: '',
                    content: '',
                    showCancel: true,
                    cancelText: '',
                    confirmText: ''
                },
                custom: {
                    methodName: ''
                }
            }
        },
        center: {
            useSearchBar: false,
            searchBarPlaceholder: '搜索...',
            roundSearchBar: true,
            text: '欢迎使用',
            color: '',
            clickConfig: {
                debug: true,
                type: 0,
                navigationConfig: {
                    page: '',
                    url: '',
                    type: 0
                },
                toastConfig: {
                    title: '',
                    icon: '', //success , loading,none
                    mask: false,
                    duration: 1500,
                    position: '' //top ,center,bottom
                },
                modalConfig: {
                    title: '',
                    content: '',
                    showCancel: true,
                    cancelText: '',
                    confirmText: ''
                },
                custom: {
                    methodName: ''
                }
            }
        },
        right: {
            text: '',
            icon: 'more',
            color: '',
            visible: true,
            clickConfig: {
                debug: true,
                type: 0,
                navigationConfig: {
                    page: '',
                    url: '',
                    type: 0
                },
                toastConfig: {
                    title: '',
                    icon: '', //success , loading,none
                    mask: false,
                    duration: 1500,
                    position: '' //top ,center,bottom
                },
                modalConfig: {
                    title: '',
                    content: '',
                    showCancel: true,
                    cancelText: '',
                    confirmText: ''
                },
                custom: {
                    methodName: ''
                }
            }
        }
    }
}
export default topToolBar
