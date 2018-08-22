const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    launches(order: OrderBy, scope: Scope): [Launch]
    launch(id: String!): Launch
    rockets: [Rocket]
    rocket(id: String!): Rocket
    capsules: [Capsule]
    capsule(id: String!): Capsule
  }

  enum Scope {
    all
    latest
    next
    upcoming
  }

  enum OrderBy {
    ASC
    DESC
  }

  type Capsule {
    id: String
    name: String
    type: String
    active: Boolean
    crew_capacity: Int
    sidewall_angle_deg: Int
    orbit_duration_yr: Int
    heat_shield: CapsuleHeatShield
    thrusters: [CapsuleThrusters]
    launch_payload_mass: Mass
    launch_payload_vol: CapsulePayloadVol
    return_payload_mass: Mass
    return_payload_vol: CapsulePayloadVol
    pressurized_capsule: CapsulePressurized
    trunk: CapsuleTrunk
    height_w_trunk: Height
    diameter: Diameter
    wikipedia: String
    description: String
  }

  type CapsuleTrunk {
    trunk_volume: CapsulePayloadVol
    cargo: CapsuleCargo
  }

  type CapsuleCargo {
    solar_array: Int
    unpressurized_cargo: Boolean
  }

  type CapsulePressurized {
    payload_volume: CapsulePayloadVol
  }

  type CapsulePayloadVol {
    cubic_meters: Int
    cubic_feet: Int
  }

  type CapsuleThrusters {
    type: String
    amount: Int
    pods: Int
    fuel_1: String
    fuel_2: String
    thrust: Thrust
  }

  type CapsuleHeatShield {
    material: String
    size_meters: Float
    temp_degrees: Int
    dev_partner: String
  }

  type Rocket {
    rocketid: Int
    id: String
    name: String
    type: String
    active: Boolean
    stages: Int
    boosters: Int
    cost_per_launch: Int
    success_rate_pct: Int
    first_flight: String
    country: String
    company: String
    height: Height
    diameter: Diameter
    mass: Mass
    payload_weights: RocketPayloadWeights
    first_stage: RocketFirstStage
    second_stage: RocketSecondStage
    engines: RocketEngines
    landing_legs: RocketLandingLegs
    wikipedia: String
    description: String
  }

  type RocketLandingLegs {
    number: Int
    material: String
  }

  type RocketEngines {
    number: Int
    type: String
    version: String
    layout: String
    engine_loss_max: Int
    propellant_1: String
    propellant_2: String
    thrust_sea_level: Thrust
    thrust_vacuum: Thrust
    thrust_to_weight: Int
  }

  type Mass {
    kg: Float
    lb: Float
  }

  type RocketPayloadWeights {
    id: String
    name: String
    kg: Float
    lb: Float
  }

  type Launch {
    _id: String
    details: String
    flight_number: Int
    launch_date_local: String
    launch_date_unix: Int
    launch_date_utc: String
    launch_site: LaunchSite
    launch_success: Boolean
    launch_year: Int
    links: LaunchLinks
    mission_name: String
    reuse: LaunchReuse
    rocket: LaunchRocket
    static_fire_date_utc: String
    telemetry: LaunchTelemetry
    upcoming: Boolean
  }

  type LaunchRocket {
    first_stage: LaunchRocketFirstStage
    rocket_id: String
    rocket_name: String
    rocket_type: String
    second_stage: LaunchRocketSecondStage
  }

  type LaunchRocketFirstStage {
    cores: [LaunchRocketFirstStageCore]
  }

  type LaunchRocketFirstStageCore {
    block: Int
    core_serial: String
    flight: Int
    land_success: Boolean
    landing_type: String
    landing_vehicle: String
    reused: Boolean
  }

  type LaunchRocketSecondStage {
    block: Int
    payloads: [Payload]
  }

  type RocketFirstStage {
    reusable: Boolean
    engines: Int
    fuel_amount_tons: Float
    burn_time_sec: Int
    thrust_sea_level: Thrust
    thrust_vacuum: Thrust
  }

  type RocketSecondStage {
    engines: Int
    fuel_amount_tons: Float
    burn_time_sec: Int
    thrust: Thrust
    payloads: RocketSecondStagePayload
  }

  type RocketSecondStagePayload {
    option_1: String
    option_2: String
    composite_fairing: CompositeFairing
  }

  type CompositeFairing {
    height: Height
    diameter: Diameter
  }

  type Height {
    meters: Float
    feet: Float
  }

  type Diameter {
    meters: Float
    feet: Float
  }

  type Thrust {
    kN: Float
    lbf: Float
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

  type LaunchTelemetry {
    flight_club: String
  }

  type LaunchReuse {
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

  type LaunchLinks {
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
