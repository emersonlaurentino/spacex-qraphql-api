const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    launches: [Launche]
  }

  type Launche {
    details: String
    flight_number: Int
    launch_date_local: String
    launch_date_unix: Int
    launch_date_utc: String
    launch_site: LaunchSite
    launch_success: Boolean
    launch_year: Int
    links: Links
    mission_name: String
    reuse: Reuse
    rocket: Rocket
    static_fire_date_utc: String
    telemetry: Telemetry
    upcoming: Boolean
  }

  type Rocket {
    first_stage: FirstStage
    rocket_id: String
    rocket_name: String
    rocket_type: String
    second_stage: SecondStage
  }

  type FirstStage {
    cores: [Core]
  }

  type Core {
    block: Int
    core_serial: String
    flight: Int
    land_success: Boolean
    landing_type: String
    landing_vehicle: String
    reused: Boolean
  }

  type SecondStage {
    block: Int
    payloads: [Payload]
  }

  type Payload {
    customers: [String]
    manufacturer: String
    nationality: String
    norad_id: [Int]
    orbit_params: OrbitParams
    orbit: String
    payload_id: String
    payload_mass_kg: Int
    payload_mass_lbs: Int
    payload_type: String
    reused: Boolean
  }

  type OrbitParams {
    apoapsis_km: Float
    eccentricity: Float
    epoch: String
    inclination_deg: Float
    lifespan_years: Int
    longitude: Float
    mean_motion: Float
    periapsis_km: Float
    period_min: Float
    raan: Float
    reference_system: String
    regime: String
    semi_major_axis_km: Float
  }

  type Telemetry {
    flight_club: String
  }

  type Reuse {
    capsule: Boolean
    core: Boolean
    fairings: Boolean
    side_core1: Boolean
    side_core2: Boolean
  }

  type LaunchSite {
    site_id: String
    site_name_long: String
    site_name: String
  }

  type Links {
    article_link: String
    mission_patch_small: String
    mission_patch: String
    presskit: String
    reddit_campaign: String
    reddit_launch: String
    reddit_media: String
    reddit_recovery: String
    video_link: String
    wikipedia: String
  }
`;

module.exports = typeDefs;
