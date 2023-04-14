import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic'

Builder.registerComponent(
  dynamic<never>(() => import('./Text')),
  {
    name: '_Collection_',
    inputs: [
      {
        name: 'fplGlobalCodes',
        type: 'list',
        subFields: [
          {
            name: 'fplGlobalCode',
            type: 'string',
            required: true,
          },
        ],
      },
      {
        name: 'productCategoryIds',
        type: 'list',
        subFields: [
          {
            name: 'productCategoryId',
            type: 'number',
            required: true,
          },
        ],
      },
      {
        name: 'tagIds',
        type: 'list',
        subFields: [
          {
            name: 'tagId',
            type: 'number',
            required: true,
          },
        ],
      },
      {
        name: 'productTypeIds',
        type: 'list',
        subFields: [
          {
            name: 'productTypeId',
            type: 'number',
            required: true,
          },
        ],
      },
      {
        name: 'filters',
        type: 'list',
        defaultValue: null,
        subFields: [
          {
            name: 'filter',
            type: 'string',
            required: true,
            enum: [
              'default_product_category_id',
              'gender',
              'size_bottom',
              'size_top',
              'size_bra',
              'size_shoes',
              'color',
              'review',
              'feature',
              'fabric',
              'rise',
              'compression',
              'collection',
              'activity',
              'target_area',
              'inseam',
              'lining',
              'style',
              'dg_men_bottoms',
              'dg_men_pants',
              'dg_men_polo_shirts',
              'dg_men_short_sleeve_tees',
              'dg_men_shorts',
              'dg_men_shorts_lined',
              'dg_men_shorts_unlined',
              'dg_men_sweatshirts',
              'dg_men_tops',
              'dg_men_tank_tops',
              'dg_men_underwear',
              'dg_women_bottoms',
              'dg_women_leggings',
              'dg_women_shorts',
              'dg_women_sports_bras',
            ],
          },
        ],
      },
      {
        name: 'sort',
        type: 'object',
        defaultValue: {
          direction: 'asc',
        },
        subFields: [
          {
            name: 'field',
            friendlyName: 'Sort List',
            type: 'string',
          },
          {
            name: 'direction',
            friendlyName: 'Sort Direction',
            type: 'string',
            enum: ['asc', 'desc'],
            hideFromUI: true,
          },
          {
            name: 'filterLabel',
            friendlyName: 'Sort Label',
            type: 'string',
          },
        ],
      },
      {
        name: 'includeOutOfStock',
        type: 'boolean',
      },
      {
        name: 'brand',
        type: 'string',
        enum: ['both', 'fabletics', 'yitty'],
        defaultValue: 'fabletics',
      },
      {
        name: 'label',
        type: 'string',
        localized: true,
      },
      {
        name: 'gridAssetContainer',
        type: 'string',
      },
      {
        name: 'gridAssetContainerMobile',
        type: 'string',
      },
      {
        name: 'productSource',
        type: 'string',
      },
      {
        name: 'gridSortFeature',
        type: 'string',
      },
      {
        name: 'maxItemCount',
        type: 'number',
      },
      {
        name: 'isCarousel',
        type: 'boolean',
        advanced: true,
      },
      {
        name: 'sideNav',
        type: 'object',
        advanced: true,
        subFields: [
          {
            name: 'shouldShowCategoryDropdown',
            type: 'boolean',
            defaultValue: false,
          },
          {
            name: 'shouldShowCategoryHeading',
            type: 'boolean',
            defaultValue: false,
          },
          {
            name: 'categoryNavContainer',
            type: 'string',
          },
        ],
      },
      {
        name: 'algoOptions',
        type: 'object',
        advanced: true,
        subFields: [
          {
            name: 'esIndex',
            type: 'string',
            enum: ['', 'boutique_fl_prod'],
          },
        ],
      },
      {
        name: 'imageType',
        type: 'string',
        advanced: true,
        enum: ['default', 'plus'],
        defaultValue: 'default',
      },
      {
        name: 'gridStyleGuide',
        type: 'object',
        advanced: true,
        subFields: [
          {
            name: 'tagList',
            type: 'string',
            enum: [
              '',
              'dg_men_bottoms',
              'dg_men_pants',
              'dg_men_polo_shirts',
              'dg_men_short_sleeve_tees',
              'dg_men_shorts',
              'dg_men_shorts_lined',
              'dg_men_shorts_unlined',
              'dg_men_sweatshirts',
              'dg_men_tops',
              'dg_men_tank_tops',
              'dg_men_underwear',
              'dg_women_bottoms',
              'dg_women_leggings',
              'dg_women_shorts',
              'dg_women_sports_bras',
            ],
            required: true,
          },
          {
            name: 'assetContainers',
            type: 'object',
            required: true,
            subFields: [
              {
                name: 'desktop',
                type: 'string',
                required: true,
              },
              {
                name: 'mobile',
                type: 'string',
                required: true,
              },
              {
                name: 'marketingCard',
                type: 'string',
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: 'gridUrlLink',
        type: 'string',
        advanced: true,
      },
      {
        name: 'gridCTA',
        type: 'object',
        advanced: true,
        defaultValue: {
          fontVariant: 'condensedVipHomepageFamily',
        },
        subFields: [
          {
            name: 'desktop',
            type: 'boolean',
          },
          {
            name: 'mobile',
            type: 'boolean',
          },
          {
            name: 'fontVariant',
            type: 'string',
            enum: ['condensedVipHomepageFamily'],
            hideFromUI: true,
          },
          {
            name: 'label',
            type: 'string',
            localized: true,
          },
          {
            name: 'url',
            type: 'string',
            localized: true,
          },
        ],
      },
      {
        name: 'fontVariant',
        type: 'string',
        enum: ['condensedVipHomepageFamily'],
        defaultValue: 'condensedVipHomepageFamily',
        hideFromUI: true,
      },
      {
        name: 'excludePreorderProducts',
        type: 'boolean',
        advanced: true,
        defaultValue: false,
      },
    ],
  }
)
