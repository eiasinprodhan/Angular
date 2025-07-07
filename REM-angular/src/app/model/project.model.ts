export class Project {
    project_id!: number;
    name!: string;
    location!: {
        city: string;
        district: string;
        latitude: number;
        longitude: number;
    };
    project_type!: string;
    start_date!: string;
    expected_completion_date!: string;
    status!: string;
    total_land_area!: number;
    description!: string;
    number_of_buildings!: number;
    legal_approvals!: string[];
    amenities!: string[];
    brochure_url!: string;
    video_url!: string;
    images!: string[];
    developer_name!: string;
    contact_info!: {
        contact_person: string;
        email: string;
        phone: string;
        whatsapp: string;
    };
}
