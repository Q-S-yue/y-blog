(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{393:function(_,t,v){"use strict";v.r(t);var e=v(54),n=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"两数之和"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#两数之和"}},[_._v("#")]),_._v(" 两数之和")]),_._v(" "),v("p",[_._v("给定一个整数数组 "),v("code",[_._v("nums")]),_._v(" 和一个整数目标值 "),v("code",[_._v("target")]),_._v("，请你在该数组中找出 "),v("strong",[_._v("和为目标值")]),_._v(" "),v("em",[v("code",[_._v("target")])]),_._v(" 的那 "),v("strong",[_._v("两个")]),_._v(" 整数，并返回它们的数组下标。")]),_._v(" "),v("blockquote",[v("p",[_._v("输入：nums = [2,7,11,15], target = 9\n输出：[0,1]\n解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。")]),_._v(" "),v("p",[_._v("可以假设每种输入只会对应一个答案，但是数组中同一个元素在答案中不能重复出现。")])]),_._v(" "),v("p",[_._v("关于这个题，有几个解法，")]),_._v(" "),v("p",[_._v("第一个，暴力解法。")]),_._v(" "),v("p",[_._v("双层循环，判断两数之和。")]),_._v(" "),v("p",[_._v("复杂度分析：时间复杂度："),v("code",[_._v("O(n^2)")]),_._v(", n为数组的长度。空间复杂度"),v("code",[_._v("O(1)")]),_._v("。")]),_._v(" "),v("p",[_._v("第二个，")]),_._v(" "),v("p",[_._v("降低时间复杂度，用空间换时间，采用哈希表。首先遍历nums数组，然后在哈希表中寻找target-x，如果不存在就把当前元素x和下标存入哈希表，如果存在就返回target-x和当前元素的下标\n复杂度分析：时间复杂度O(n)， n为数组的长度，空间复杂度O(n)，n为数组的长度，主要是哈希表的空间开销")]),_._v(" "),v("p",[_._v("集合和字典，")]),_._v(" "),v("p",[_._v("集合常见的形式是set，字典常见的形式是map")]),_._v(" "),v("p",[_._v("集合就是，存储不同值，类似于数组，只有一个值，")]),_._v(" "),v("p",[_._v("哈希算法：是典型的O(1)时间复杂度，无论数据规模多大，都可以再一次计算后找到目标（不考虑冲突），O(1)为最低的时间复杂度。")]),_._v(" "),v("p",[_._v("平衡二叉搜索树？")]),_._v(" "),v("p",[_._v("平衡二叉搜索树，是O(logn)，的时间复杂度，O(logn)是指，当数据增大n倍时，耗时增大logn倍，log是以2为底，例如当数据增大256倍时，耗时增大8倍，是比线性还要低的时间复杂度。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.debug8.com%2Fstatics%2Fuploads%2F2020%2F06%2F06%2F1591421105288325.png&refer=http%3A%2F%2Fwww.debug8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640669865&t=9be14e4820e3923324568f65c7ea2fc7",alt:"img"}})]),_._v(" "),v("p",[_._v("为什么set和map可以用这两种方法实现？不直接就是一种数据结构吗？")]),_._v(" "),v("p",[_._v("哈希算法是什么")]),_._v(" "),v("p",[_._v("js中的集合和字典")])])}),[],!1,null,null,null);t.default=n.exports}}]);