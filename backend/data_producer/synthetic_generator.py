import numpy as np
import matplotlib.pyplot as plt

def generate_synthetic_data(N, V, K_star, n, alpha, std_range=(0.05, 0.10)):
    """
    Generate synthetic Gaussian data with intermixed clusters.
    
    Args:
        N (int): Total number of data points.
        V (int): Number of features/dimensions.
        K_star (int): Number of clusters.
        n (int): Minimum cluster size.
        alpha (float): Intermixing parameter controlling the closeness of clusters.
        std_range (tuple): Range for standard deviations for Gaussian clusters.
        
    Returns:
        X (np.array): Synthetic data of shape (N, V).
        labels (np.array): Ground truth cluster labels.
    """
    # Ensure that K_star * n < N to distribute extra points randomly
    if K_star * n >= N:
        raise ValueError("K_star * n must be less than N to allow for random distribution of remaining points.")
    
    # Step 1: Generate cluster sizes
    Nk = np.full(K_star, n)  # Start with minimum size for each cluster
    remaining_points = N - (K_star * n)
    Nk[:remaining_points] += 1  # Distribute remaining points randomly
    
    # Step 2: Generate cluster centers
    centers = np.random.uniform(low=alpha - 1, high=1 - alpha, size=(K_star, V))
    
    # Step 3: Generate data for each cluster
    data = []
    labels = []
    for k in range(K_star):
        # Random standard deviations for each feature
        stds = np.random.uniform(low=std_range[0], high=std_range[1], size=V)
        
        # Generate Nk[k] data points from Gaussian distribution for cluster k
        cluster_data = np.random.randn(Nk[k], V) * stds + centers[k]
        
        # Append generated data and corresponding labels
        data.append(cluster_data)
        labels.append(np.full(Nk[k], k))
    
    # Combine all cluster data
    X = np.vstack(data)
    labels = np.hstack(labels)
    
    return X, labels

# Example usage:
N = 1000  # Number of entities
V = 15    # Number of features
K_star = 7  # Number of clusters
n = 100   # Minimum cluster size
alpha = 0.5  # Intermixing parameter

