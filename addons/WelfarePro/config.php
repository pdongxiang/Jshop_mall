<?php
return [
    'menu' =>[
        'title' => '菜单，此菜单就写到配置文件上吧，也不去可视化编辑了。',
        'value' => [
            'welfarepro_1' =>[
                'id' => 'welfarepro_1',
                'parent_menu_id' => '356',
                'name' => '福利功能',
                'type' => 'c',
                'perm_type' => 1,
                'url' => get_addon_url('WelfarePro://index/index'),
                'sort' => 140
            ],
            'welfarepro_2' =>[
                'id' => 'welfarepro_2',
                'parent_menu_id' => 'welfarepro_1',
                'name' => '扫码领红包',
                'type' => 'a',
                'perm_type' => 1,
                'url' => get_addon_url('WelfarePro://index/index'),
                'sort' => 100
            ],
            'welfarepro_21' =>[
                'id' => 'welfarepro_21',
                'parent_menu_id' => 'welfarepro_2',
                'name' => '红包添加&编辑',
                'type' => 'a',
                'perm_type' => 3,
                'url' => '',
                'sort' => 100
            ],
            'welfarepro_22' =>[
                'id' => 'welfarepro_22',
                'parent_menu_id' => 'welfarepro_2',
                'name' => '红包删除',
                'type' => 'a',
                'perm_type' => 3,
                'url' => '',
                'sort' => 100
            ],
            'welfarepro_23' =>[
                'id' => 'welfarepro_23',
                'parent_menu_id' => 'welfarepro_2',
                'name' => '红包领取记录',
                'type' => 'a',
                'perm_type' => 3,
                'url' => '',
                'sort' => 100
            ],
            'welfarepro_3' =>[
                'id' => 'welfarepro_3',
                'parent_menu_id' => 'welfarepro_1',
                'name' => '扫码领优惠券',
                'type' => 'a',
                'perm_type' => 1,
                'url' => get_addon_url('WelfarePro://index/CouponIndex'),
                'sort' => 100
            ],
        ]
    ],
    'api' => [
        'title' => '插件对外的接口都放到这里，接口请求的时候，会来此判断是否存在此控制器和方法,类似/config/api/api.php',
        'value' => [
            'api' => [      //控制器名称，可以随便起名，不过此控制器集成的基类一定要注意，不要写错了
                'code'   => 'Api',
                'method' => [
                    'hb' => [
                        'code'     => 'hb',
                        'is_login' => true
                    ],
                    'coupon' => [
                        'code'     => 'coupon',
                        'is_login' => true
                    ],
                ]
            ]
        ]
    ]
];