'use strict';

/**
 * raider-io service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::raider-io.raider-io');
