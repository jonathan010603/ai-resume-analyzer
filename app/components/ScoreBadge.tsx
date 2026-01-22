interface ScoreBadgeProps {
    score: number;
}

export default function ScoreBadge({ score }: ScoreBadgeProps) {
    let badgeColor = '';
    let badgeText = '';

    if (score > 70) {
        badgeColor = 'bg-green text-green-600';
        badgeText = 'Strong';
    } else if (score > 49) {
        badgeColor = 'bg-yellow text-yellow-600';
        badgeText = 'Good Start';
    } else {
        badgeColor = 'bg-red text-red-600';
        badgeText = 'Needs Work';
    }

    return (
        <div className={`px-3 py-1 rounded-full ${badgeColor}`}>
            <p className="tex-sm font-medium">{badgeText}</p>
        </div>
    );
}