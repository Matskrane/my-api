'use strict';

/**
 * raider-io router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::raider-io.raider-io');
