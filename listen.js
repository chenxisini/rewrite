
> 应用名称：趣听音乐 by@ddgksf2013

            
[rewrite_local]

# ～ 趣听音乐☆自动激活APP（2022-10-26）@ddgksf2013
^https?:\/\/api\.bspapp\.com\/client$ url script-response-body https://raw.githubusercontent.com/chenxisini/rewrite/main/listen.js

[mitm]

hostname=api.bspapp.com

***********************************/
